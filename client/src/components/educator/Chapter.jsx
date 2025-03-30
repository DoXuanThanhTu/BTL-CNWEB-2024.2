import axios from "axios";
import React, { useEffect, useState } from "react";

const Chapter = ({ id }) => {
  const [chapter, setChapter] = useState(null);
  const fetch = async () => {
    const res = await axios.get(`http://localhost:8000/chapters/${id}`);
    setChapter(res.data[0]);
  };
  useEffect(() => {
    fetch();
  }, []);
  useEffect(() => {
    console.log(chapter);
  }, [chapter]);
  return (
    <>
      {chapter && (
        <div>
          <h1>{chapter.title}</h1>
          <p>{chapter.description}</p>

          {/* {chapter.content.map((item, index) => (
            <div key={index}>
              {item.type === "lecture" && <p>{item.data}</p>}
              {item.type === "video" && (
                <video width="600" controls>
                  <source src={item.data} type="video/mp4" />
                </video>
              )}
              {item.type === "quiz" && (
                <div>
                  <h3>Quiz</h3>
                </div>
              )}
            </div>
          ))} */}
        </div>
      )}
    </>
  );
};

export default Chapter;
