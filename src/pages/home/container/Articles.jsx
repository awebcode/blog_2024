import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import ArticleCard from "../../../components/ArticleCard";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllPosts } from "../../../services/index/posts";
import { toast } from "react-hot-toast";
import ArticleCardSkeleton from "../../../components/ArticleCardSkeleton";
import ErrorMessage from "../../../components/ErrorMessage";
import Header from "../../../components/Header";
import { useLocation, useSearchParams } from "react-router-dom";

const Articles = ({ title }) => {
  const location=useLocation()
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts", category],
    queryFn: () => getAllPosts({ category }),
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    const fetchPosts = async () => {
      await queryClient.prefetchQuery(["posts", category], () =>
        getAllPosts({ category })
      );
    };

    fetchPosts();
  }, [category, queryClient]);

  return (
    <>
      {location.pathname.includes("blog") && <Header />}
      {title && (
        <h1 className="text-4xl text-center md:text-6xl py-6 font-bold text-gray-800">
          {title}
        </h1>
      )}
      <section className="flex flex-col container mx-auto px-5 py-10">
        <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
          {isLoading ? (
            [...Array(6)].map((item, index) => (
              <ArticleCardSkeleton
                key={index}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          ) : isError ? (
            <ErrorMessage message="Couldn't fetch the posts data" />
          ) : (
            data?.data.map((post) => (
              <ArticleCard
                key={post._id}
                post={post}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          )}
        </div>
        <button className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg">
          <span>More articles</span>
          <FaArrowRight className="w-3 h-3" />
        </button>
      </section>
    </>
  );
};

export default Articles;
