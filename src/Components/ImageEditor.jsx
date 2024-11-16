import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

function ImageEnhancer() {
  const [image, setImage] = useState(null);
  const [editedImage, setEditedImage] = useState(null);
  const [scale, setScale] = useState(1);
  const editorRef = React.createRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleScaleChange = (e) => {
    const scaleValue = parseFloat(e.target.value);
    setScale(scaleValue);
  };

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      const editedImageUrl = canvas.toDataURL();
      setEditedImage(editedImageUrl);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div>
          <AvatarEditor
            ref={editorRef}
            image={image}
            width={250}
            height={250}
            border={50}
            borderRadius={125}
            scale={scale}
          />
          <input
            type="range"
            min="1"
            max="2"
            step="0.01"
            value={scale}
            onChange={handleScaleChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
      {editedImage && <img src={editedImage} alt="Edited" />}
    </div>
  );
}

export default ImageEnhancer;