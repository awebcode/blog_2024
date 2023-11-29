import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import { images } from "../../../constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import { getAllPosts } from "../../../services/index/posts";
import toast from "react-hot-toast";
import moment from "moment";

const Hero = () => {
  const queryClient = useQueryClient();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts", searchKeyword],
    queryFn: () => getAllPosts({ searchKeyword }),
    enabled: !!searchKeyword,
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    const fetchPosts = async () => {
      await queryClient.prefetchQuery(["posts", searchKeyword], () =>
        getAllPosts({ searchKeyword })
      );
    };

    if (!searchKeyword) {
      setSearchResults(null); // Clear search results if searchKeyword is empty
    } else {
      fetchPosts();
    }
  }, [searchKeyword, queryClient]);

  const handleSearch = async (value) => {
    if (value === "") {
      console.log("value is empty");
      setSearchResults(null); // Clear search results if value is empty
    } else {
      // Minimum characters required to trigger a search

      if (value.trim().length >= 2) {
        setSearchKeyword(value);
        const result = await getAllPosts({ searchKeyword: value });
        setSearchResults(result.data);
      }
    }
  };

  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Read the most interesting articles
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
              type="text"
              placeholder="Search article"
              value={searchKeyword}
              onChange={(e) => {
                setSearchKeyword(e.target.value);
                handleSearch(e.target.value);
              }}
            />
          </div>
          <button
            onClick={handleSearch}
            className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2"
          >
            Search
          </button>

          {/* fetch */}
          {searchResults && searchResults?.length > 0 ? (
            <div className="absolute top-[70px] left-0 w-full z-50 bg-white border border-gray-300 rounded-lg p-4 max-h-[400px] overflow-y-scroll">
              <h3 className="text-lg font-bold mb-2">Search Results</h3>
              {searchResults.map((post) => (
                <div key={post.slug} className="flex items-center gap-4 mb-2">
                  <img
                    src={post.photo}
                    alt={post.title}
                    className="w-16 h-16 rounded-md"
                  />
                  <div className="flex flex-col">
                    {" "}
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-500 hover:underline"
                    >
                      {post.title}
                    </Link>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-500 hover:underline"
                    >
                      {moment(post.postcreatedAtDate).format("llll")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            searchKeyword && (
              <h1 className="absolute top-[70px] left-0 w-full z-50 text-center text-2xl font-bold text-gray-900 p-4 bg-white rounded">
                No posts found!
              </h1>
            )
          )}
        </div>

        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Interfaces
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2">
        <img className="w-full" src={images.HeroImage} alt="users are reading articles" />
      </div>
    </section>
  );
};

export default Hero;
