import React from 'react'
import Header from '../Header';

const Articles = () => {
  return (
    <div>
      <Header />
      {/*  */}
      <h1 className="text-center text-5xl  md:text-8xl text-gray-900 font-bold m-2 p-4">
       Articles
      </h1>
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center">
          <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?nature "
                alt=""
                class=""
              />{" "}
            </div>
            <div class="text-sm text-gray-500 m-2">30 March, 2023</div>
            <div class="font-bold text-lg text-black m-2">
              There is something about nature that just feels so calming.
            </div>
            <div class="text-gray-500 m-2 text-sm">
              <a href="">
                There is something about nature that just feels so calming. Whether you
                are out hiking through the wilderness or simply taking a stroll through
                your local park, being surrounded by natural beauty can really put you in
                a good mood. And there is definitely something therapeutic about spending
                time in nature, whether it is clearing your mind after a long day or just
                enjoying the peace and quiet.
              </a>
            </div>
            <div class="flex justify-between">
              <div class="flex m-2">
                <ion-icon name="chatbubble-outline" class="m-1 text-gray-500"></ion-icon>
                <div class="text-gray-500 m-1 mb-4 text-sm">896</div>
                <ion-icon name="eye-outline" class="m-1 text-gray-500"></ion-icon>
                <div class="text-gray-500 m-1 mb-4 text-sm">5648</div>
              </div>
              <div class="m-2">
                <ion-icon
                  name="share-social-outline"
                  class="m-1 text-blue-500 hover:text-pink-400 cursor-pointer text-xl "
                >
                  {" "}
                </ion-icon>
              </div>
            </div>
          </div>
          <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?beach "
                alt=""
                class=""
              />{" "}
            </div>
            <div class="text-sm text-gray-500 m-2">30 March, 2023</div>
            <div class="font-bold text-lg text-black m-2">This is post title</div>
            <div class="text-gray-500 m-2 text-sm">
              <a href="">
                When you go to the beach, there are a few things that you should expect.
                The first thing is that the beach will be hot. The beaches in California
                are typically hot, and the beaches in Florida are typically hot.
              </a>
            </div>
            <div class="flex justify-between">
              <div class="flex m-2">
                <ion-icon name="chatbubble-outline" class="m-1 text-gray-500"></ion-icon>
                <div class="text-gray-500 m-1 mb-4 text-sm">896</div>
                <ion-icon name="eye-outline" class="m-1 text-gray-500"></ion-icon>
                <div class="text-gray-500 m-1 mb-4 text-sm">5648</div>
              </div>
              <div class="m-2">
                <ion-icon
                  name="share-social-outline"
                  class="m-1 text-blue-500 hover:text-pink-400 cursor-pointer text-xl "
                >
                  {" "}
                </ion-icon>
              </div>
            </div>
          </div>
          <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?galaxy "
                alt=""
                class=""
              />{" "}
            </div>
            <div class="text-sm text-gray-500 m-2">30 March, 2023</div>
            <div class="font-bold text-lg text-black m-2">This is post title</div>
            <div class="text-gray-500 m-2 text-sm">
              <a href="">
                Galaxies are one of the biggest things in the Universe. They are so big
                that they can be seen with the naked eye. Galaxies are made up of billions
                of stars.
              </a>
            </div>
            <div class="flex justify-between">
              <div class="flex m-2">
                <ion-icon name="chatbubble-outline" class="m-1 text-gray-500"></ion-icon>
                <div class="text-gray-500 m-1 mb-4 text-sm">896</div>
                <ion-icon name="eye-outline" class="m-1 text-gray-500"></ion-icon>
                <div class="text-gray-500 m-1 mb-4 text-sm">5648</div>
              </div>
              <div class="m-2">
                <ion-icon
                  name="share-social-outline"
                  class="m-1 text-blue-500 hover:text-pink-400 cursor-pointer text-xl "
                >
                  {" "}
                </ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div class="flex items-center justify-center text-center">
        <div class="flex flex-col items-center justify-center rounded-tr-full rounded-bl-full w-full bg-white">
          <div class="flex flex-col p-2 m-2 max-w-7xl">
            <div class="text-xl md:text-3xl font-medium">Our Team</div>

            <div class="flex items-center justify-center lg:flex-row flex-col space-x-4 space-y-4 p-2">
              <div class="flex-col px-6 py-2 w-[90%] md:w-[50%] lg:w-1/4">
                <div class="h-40 w-40 border-2 border-yellow-400 rounded-full overflow-hidden bg-gray-200">
                  <img src="https://source.unsplash.com/300x300/?girl" alt="" class="" />
                </div>

                <div class="text-md text-white cursor-pointer w-[50%] bg-yellow-400 lg:rotate-90 mr-40 mt-8 lg:mb-16 pr-4 pl-1 py-1">
                  Designer
                </div>
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Elina Gilbert
                </div>
                <div class="text-left m-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                  deserunt, dolorum illo consequatur, natus aut, esse dignissimos rem
                  facilis ipsa numquam
                </div>
              </div>
              <div class="flex-col px-6 py-2 w-[90%] md:w-[50%] lg:w-1/4">
                <div class="h-40 w-40 border-2 border-green-400 rounded-full overflow-hidden bg-gray-200">
                  <img src="https://source.unsplash.com/300x300/?boy" alt="" class="" />
                </div>

                <div class="text-md text-white cursor-pointer w-[50%] bg-green-400 lg:rotate-90 mr-40 mt-8 lg:mb-16 pr-4 pl-1 py-1">
                  Front-end
                </div>
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  John Doe
                </div>
                <div class="text-left m-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                  deserunt, dolorum illo consequatur, natus aut, esse dignissimos rem
                  facilis ipsa numquam
                </div>
              </div>
              <div class="flex-col px-6 py-2 w-[90%] md:w-[50%] lg:w-1/4">
                <div class="h-40 w-40 border-2 border-cyan-400 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?boy,man"
                    alt=""
                    class=""
                  />
                </div>

                <div class="text-md text-white cursor-pointer w-[50%] bg-cyan-400 lg:rotate-90 mr-40 mt-8 lg:mb-16 pr-4 pl-1 py-1">
                  CEO
                </div>
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Arkay
                </div>
                <div class="text-left m-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                  deserunt, dolorum illo consequatur, natus aut, esse dignissimos rem
                  facilis ipsa numquam
                </div>
              </div>
              <div class="flex-col px-6 py-2 w-[90%] md:w-[50%] lg:w-1/4">
                <div class="h-40 w-40 border-2 border-fuchsia-400 rounded-full overflow-hidden bg-gray-200">
                  <img src="https://source.unsplash.com/300x300/?girl" alt="" class="" />
                </div>

                <div class="text-md text-white cursor-pointer w-[50%] bg-fuchsia-400 lg:rotate-90 mr-40 mt-8 lg:mb-16 pr-4 pl-1 py-1">
                  Deployer
                </div>
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Ashley Adams
                </div>
                <div class="text-left m-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                  deserunt, dolorum illo consequatur, natus aut, esse dignissimos rem
                  facilis ipsa numquam
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div class="flex justify-center">
        <div class="flex flex-col max-w-7xl justify-center items-center">
          <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?nature "
                alt=""
                class=""
              />{" "}
            </div>
            <div class="grid p-2">
              <div class="font-bold text-lg text-black m-2 mt-10">
                Love is like wildflowers; it is often found in the most unlikely places.{" "}
              </div>
              <div class="text-gray-500 m-2 text-sm">
                <a href="">
                  Flowers are a beautiful way to show your appreciation for someone. They
                  are also a great way to show your love. Flowers can be delivered in a
                  variety of ways, including through mail, messenger, or even in person.
                </a>
              </div>
            </div>
          </div>
          <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="grid p-2">
              <div class="font-bold text-lg text-black m-2 mt-10">
                However alert we are, antiquity remains an unknown, unanticipated galaxy.{" "}
              </div>
              <div class="text-gray-500 m-2 text-sm">
                <a href="">
                  The Universe is a vast and ever-expanding place. It is composed of an
                  estimated 100 billion galaxies, each with billions of stars. It is
                  estimated that there are as many as 100 billion galaxies in the
                  observable universe.{" "}
                </a>
              </div>
            </div>
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?man "
                alt=""
                class=""
              />{" "}
            </div>
          </div>
          <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?people "
                alt=""
                class=""
              />{" "}
            </div>
            <div class="grid p-2">
              <div class="font-bold text-lg text-black m-2 mt-10">
                It is the friends you can call up at 4 a.m. that matter.{" "}
              </div>
              <div class="text-gray-500 m-2 text-sm">
                <a href="">
                  The bond of friendship is one that is often unspoken and unrivaled. It
                  is a relationship that is founded on mutual respect and understanding.
                  Friendship is something that can be found in all walks of life, and is
                  often the foundation of a successful life.{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* team */}

      <div class="flex items-center justify-center text-center">
        <div class="flex flex-col p-2 m-2  max-w-7xl">
          <div class="text-3xl font-medium">Meet Our Team</div>
          <div class="text-sm mx-2 md:text-xl text-stone-500">
            Meet the team member who have contributed their designs for this websites.
          </div>
          <div class="text-sm mx-2 md:text-xl mb-2 text-stone-500">
            Resource person of Tailblocks communinty
          </div>

          <div class="flex items-center justify-center md:flex-row flex-col space-x-4  p-2">
            <div class="flex items-center ml-4 md:ml-0 space-x-2 px-6 py-2 md:w-1/3 w-full  ">
              <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://source.unsplash.com/300x300/?man,businessman"
                  alt=""
                  class=""
                />
              </div>
              <div class="flex-col">
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  John Doe
                </div>
                <div class=" italic text-gray-500">CEO, Tailblocks</div>
              </div>
            </div>
            <div class="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full  ">
              <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img src="https://source.unsplash.com/300x300/?boy" alt="" class="" />
              </div>
              <div class="flex-col">
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Arkay
                </div>
                <div class=" italic text-gray-500">Executive </div>
              </div>
            </div>
            <div class="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full  ">
              <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img src="https://source.unsplash.com/300x300/?girl" alt="" class="" />
              </div>
              <div class="flex-col">
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Elina Gilbert
                </div>
                <div class=" italic text-gray-500">HR</div>
              </div>
            </div>
          </div>
          <div class="flex space-x-4  p-2 items-center justify-center md:flex-row flex-col ">
            <div class="flex items-center ml-4 md:ml-0 space-x-2 px-6 py-2 md:w-1/3 w-full  ">
              <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img src="https://source.unsplash.com/300x300/?kid" alt="" class="" />
              </div>
              <div class="flex-col">
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Clay Johnson
                </div>
                <div class=" italic text-gray-500">Manager</div>
              </div>
            </div>
            <div class="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full  ">
              <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://source.unsplash.com/300x300/?girl,woman"
                  alt=""
                  class=""
                />
              </div>
              <div class="flex-col">
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Hannah Saw
                </div>
                <div class=" italic text-gray-500">Marketing </div>
              </div>
            </div>
            <div class="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full  ">
              <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img src="https://source.unsplash.com/300x300/?woman" alt="" class="" />
              </div>
              <div class="flex-col">
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Wednesday{" "}
                </div>
                <div class=" italic text-gray-500">Financer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles