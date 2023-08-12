import React, { useState } from "react";

const Service = () => {
  const [serviceMenu, setServiceMenu] = useState(1);
  const [uploadOption, setUploadOption] = useState(1);

  const handleOptionChange = (e) => {
    setUploadOption(e.target.value);
  };
  console.log(uploadOption);

  //   console.log(serviceMenu);
  return (
    <>
      <div className="w-full p-20">
        <ul className="grid grid-cols-2">
          <li
            onClick={() => setServiceMenu(1)}
            className={`text-center border py-1 cursor-pointer ${
              serviceMenu === 1 ? "font-semibold" : ""
            }`}
          >
            Manage your entire service
          </li>
          <li
            onClick={() => setServiceMenu(2)}
            className={`text-center border py-1 cursor-pointer ${
              serviceMenu === 2 ? "font-semibold" : ""
            }`}
          >
            Upload new service
          </li>
        </ul>
        <div className="mt-10">
          {serviceMenu === 1 ? (
            <table className="w-full">
              <tbody>
                <tr className="border-b-2">
                  <th>ID</th>
                  <th>Type</th>
                  <th>Preview</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>URL</th>
                </tr>
                <tr className="border-b-1">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-[300px]">
                <label className="mr-10">Type</label>
                <select
                  value={uploadOption}
                  onChange={handleOptionChange}
                  name="type"
                  className="border"
                >
                  <option value="1">Video</option>
                  <option value="2">Music</option>
                  <option value="3">Livestream</option>
                </select>
              </div>
              {uploadOption === "1" && (
                <div className="w-[400px]">
                  <div className="w-full border px-10 py-5 mt-10">
                    <h3 className="font-semibold underline text-lg text-center">
                      Upload Video
                    </h3>
                    <div className="my-3 flex justify-around">
                      <label
                        htmlFor="inputVideo"
                        className="rounded-md cursor-pointer bg-orange-400 hover:bg-orange-500 hover:text-white duration-500 px-5 py-1"
                      >
                        File Path
                        <input
                          type="file"
                          accept="video/*"
                          id="inputVideo"
                          className="hidden"
                        />
                      </label>
                      <label
                        htmlFor="inputThumbnail"
                        className="rounded-md cursor-pointer bg-orange-400 hover:bg-orange-500 hover:text-white duration-500 px-5 py-1"
                      >
                        Thumbnail
                        <input
                          type="file"
                          accept="image/png"
                          id="inputThumbnail"
                          className="hidden"
                        />
                      </label>
                    </div>
                    <div className="my-3">
                      <label>Title</label>
                      <input
                        type="text"
                        className="w-full border px-3 py-1 rounded-md"
                        placeholder="Enter Service Title"
                      />
                    </div>
                    <div className="my-3">
                      <label>URL</label>
                      <input
                        type="text"
                        placeholder="Enter URL For Your Service"
                        className="w-full border px-3 py-1 rounded-md"
                      />
                    </div>
                    <div className="my-3">
                      <label>Description</label>
                      <textarea
                        name="Description"
                        cols="30"
                        rows="5"
                        className="w-full border px-3 py-1 rounded-md"
                      ></textarea>
                    </div>
                    <button className="w-full rounded-md bg-orange-400 hover:bg-orange-500 hover:text-white py-1 duration-500">
                      Submit
                    </button>
                  </div>
                </div>
              )}
              {uploadOption === "2" && (
                <div className="w-[400px]">
                  <div className="w-full border px-10 py-5 mt-10">
                    <h3 className="font-semibold underline text-lg text-center">
                      Upload Music
                    </h3>
                    <div className="my-3 flex justify-around">
                      <label
                        htmlFor="inputAudio"
                        className="rounded-md cursor-pointer bg-orange-400 hover:bg-orange-500 hover:text-white duration-500 px-5 py-1"
                      >
                        File Path
                        <input
                          type="file"
                          accept="audio/*"
                          id="inputAudio"
                          className="hidden"
                        />
                      </label>
                      <label
                        htmlFor="inputThumbnail"
                        className="rounded-md cursor-pointer bg-orange-400 hover:bg-orange-500 hover:text-white duration-500 px-5 py-1"
                      >
                        Thumbnail
                        <input
                          type="file"
                          accept="image/png"
                          id="inputThumbnail"
                          className="hidden"
                        />
                      </label>
                    </div>
                    <div className="my-3">
                      <label>Title</label>
                      <input
                        type="text"
                        className="w-full border px-3 py-1 rounded-md"
                        placeholder="Enter Service Title"
                      />
                    </div>
                    <div className="my-3">
                      <label>URL</label>
                      <input
                        type="text"
                        placeholder="Enter URL For Your Service"
                        className="w-full border px-3 py-1 rounded-md"
                      />
                    </div>
                    <div className="my-3">
                      <label>Description</label>
                      <textarea
                        name="Description"
                        cols="30"
                        rows="5"
                        className="w-full border px-3 py-1 rounded-md"
                      ></textarea>
                    </div>
                    <button className="w-full rounded-md bg-orange-400 hover:bg-orange-500 hover:text-white py-1 duration-500">
                      Submit
                    </button>
                  </div>
                </div>
              )}
              {uploadOption === "3" && (
                <div className="w-[300px]">
                  <h3>Start Livestream</h3>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Service;
