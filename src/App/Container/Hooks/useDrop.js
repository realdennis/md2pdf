import { useEffect, useState } from 'react';

function useDrop(ref, onLoad = () => {}) {
  const [uploading, setUploading] = useState(false);
  const [isOver, setOver] = useState(false);
  const stopDefault = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const dragOverHandler = e => {
    setOver(true);
    stopDefault(e);
  };
  const dragLeaveHandler = e => {
    setOver(false);
    stopDefault(e);
  };
  const uploadHandler = files => {
    if (
      files &&
      files[0] &&
      files[0].name &&
      /\.(md)$/i.test(files[0].name) &&
      !uploading
    ) {
      const reader = new FileReader();
      reader.onload = e => {
        setUploading(false);
        onLoad(e.target.result);
      };
      reader.readAsText(files[0]);
      setUploading(true);
    }
  };
  const dropHandler = e => {
    setOver(false);
    stopDefault(e);
    uploadHandler(e.dataTransfer.files);
  };
  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    target.addEventListener('dragenter', stopDefault, true);
    target.addEventListener('dragover', dragOverHandler, true);
    target.addEventListener('dragleave', dragLeaveHandler, true);
    target.addEventListener('drop', dropHandler, true);
    return () => {
      target.addEventListener('dragenter', stopDefault);
      target.removeEventListener('dragover', dragOverHandler);
      target.removeEventListener('dragleave', dragLeaveHandler);
      target.removeEventListener('drop', dropHandler);
    };
  }, []);
  return [uploading, isOver];
}

export default useDrop;
