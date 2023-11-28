import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { images, stables } from "../../../../constants";
import { deletePost } from "../../../../services/index/posts";
import { useEffect, useState } from "react";
import Pagination from "../../../../components/Pagination";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../../../services/index/users";

let isFirstRun = true;

const ManageUsers = () => {
  const queryClient = useQueryClient();
  const token = useSelector((state) => state.user?.userInfo?.token);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: userData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryFn: () => getAllUsers(searchKeyword, currentPage),
    queryKey: ["users"],
  });

  const { mutate: mutateDeletePost, isLoading: isLoadingDeletePost } = useMutation({
    mutationFn: (id, token) => {
      return deleteUser(id, token);
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries(["users"]);
      toast.success("user is deleted");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (isFirstRun) {
      isFirstRun = false;
      return;
    }
    refetch();
  }, [refetch, currentPage]);

  const searchKeywordHandler = (e) => {
    const { value } = e.target;
    setSearchKeyword(value);
  };

  const submitSearchKeywordHandler = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    refetch();
  };

  const deletePostHandler = (id) => {
      if (window.confirm("Are you sure?")){
        mutateDeletePost(id,token);
      }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Mange Users</h1>

      <div className="w-full px-4 mx-auto">
        <div className="py-8">
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-2xl leading-tight">Users ({userData?.data?.length})</h2>
            <div className="text-end">
              <form
                onSubmit={submitSearchKeywordHandler}
                className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0"
              >
                <div className=" relative ">
                  <input
                    type="text"
                    id='"form-subscribe-Filter'
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Post title..."
                    onChange={searchKeywordHandler}
                    value={searchKeyword}
                  />
                </div>
                <button
                  className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  type="submit"
                >
                  Filter
                </button>
              </form>
            </div>
          </div>
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Avatar
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      email
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Admin
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Verified
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Created at
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading || isFetching ? (
                    <tr>
                      <td colSpan={5} className="text-center py-10 w-full">
                        Loading...
                      </td>
                    </tr>
                  ) : userData?.data?.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center py-10 w-full">
                        No Users found
                      </td>
                    </tr>
                  ) : (
                    userData?.data.map((post) => (
                      <tr key={post?._id}>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <a href="/posts/manage/users" className="relative block">
                                <img
                                  src={
                                    post?.avatar
                                      ? stables.UPLOAD_FOLDER_BASE_URL + post?.avatar
                                      : images.userImage
                                  }
                                  alt={post.name}
                                  className="mx-auto object-cover rounded-lg w-10 aspect-square"
                                />
                              </a>
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {post.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">{post.name}</p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">{post.email}</p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          {post.admin ? (
                            <p className="text-green-500 whitespace-no-wrap">Admin</p>
                          ) : (
                            <p className="text-rose-500 whitespace-no-wrap">User</p>
                          )}
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          {post.verified ? (
                            <p className="text-green-500 whitespace-no-wrap">Verified</p>
                          ) : (
                            <p className="text-rose-500 whitespace-no-wrap">Unverified</p>
                          )}
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex gap-x-2">
                            {new Date(post.createdAt).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </div>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
                          <button
                            disabled={isLoadingDeletePost}
                            type="button"
                            className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
                            onClick={() => {
                              deletePostHandler(
                                post?._id,
                               );
                            }}
                          >
                            Delete
                          </button>
                          <Link
                            to={`/admin/posts/manage/users/edit/${post?._id}`}
                            className="text-green-600 hover:text-green-900"
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              {!isLoading && userData?.headers?.["x-totalpagecount"] && (
                <Pagination
                  onPageChange={(page) => setCurrentPage(page)}
                  currentPage={currentPage}
                  totalPageCount={parseInt(userData.headers["x-totalpagecount"], 10)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
