import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Lesson.css";

const proxy = import.meta.env.VITE_API_URL;

const Lesson = () => {
  const [lesson, setLesson] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const { lessonId } = useParams();

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const response = await axios(`${proxy}/lessons/${lessonId}`);
        setLesson(response.data);
        setFormData(response.data);
      } catch (err) {
        console.error("Failed to fetch lesson:", err);
      }
    };
    fetchLesson();
  }, [lessonId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await axios.patch(
        `${proxy}/lessons/${lessonId}`,
        formData
      );
      setLesson(response.data);
      setIsEditing(false);
    } catch (err) {
      console.error("Failed to update lesson:", err);
    }
  };

  if (!lesson) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="container">
      <button
        onClick={() => setIsEditing(!isEditing)}
        style={{ position: "absolute", right: "20px" }}
      >
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <div className="wrapper">
        <label>Content</label>
        {isEditing ? (
          <div className="editItem">
            <div dangerouslySetInnerHTML={{ __html: formData.content }}></div>
            <div>
              <textarea
                name="content"
                value={formData.content || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: lesson.content }}></div>
        )}

        <label>Video</label>
        {isEditing ? (
          <div className="editItem">
            <div>
              <iframe
                width="560"
                height="315"
                src={formData.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <input
                type="text"
                name="videoUrl"
                value={formData.videoUrl || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        ) : (
          lesson.videoUrl && (
            <iframe
              width="560"
              height="315"
              src={lesson.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )
        )}

        <label>Attachment URL</label>
        {isEditing ? (
          <input
            type="text"
            name="attachment"
            value={formData.attachment || ""}
            onChange={handleChange}
          />
        ) : (
          lesson.attachment && (
            <div>
              <a href={lesson.attachment} download>
                Download Attachment
              </a>
            </div>
          )
        )}

        <label>Order</label>
        {isEditing ? (
          <input
            type="number"
            name="order"
            value={formData.order || 0}
            onChange={handleChange}
          />
        ) : (
          <p>{lesson.order}</p>
        )}

        <label>Published</label>
        {isEditing ? (
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished || false}
            onChange={handleChange}
          />
        ) : (
          <p>{lesson.isPublished ? "Yes" : "No"}</p>
        )}

        {isEditing && (
          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default Lesson;
