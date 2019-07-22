import { useEffect, useState } from 'react';

function useDrop(ref, onLoad = () => {}) {
  const [uploading, setUploading] = useState(false);
  const [isOver, setOver] = useState(false);
  const stopDefault = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  useEffect(() => {
    const dragLeaveHandler = e => {
      setOver(false);
      stopDefault(e);
    };
    const dragOverHandler = e => {
      setOver(true);
      stopDefault(e);
    };
    const dropHandler = e => {
      setOver(false);
      stopDefault(e);
      uploadHandler(e.dataTransfer.files);
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
    const target = ref.current;
    if (!target) return;
    target.addEventListener('dragenter', stopDefault, true);
    target.addEventListener('dragover', dragOverHandler, true);
    target.addEventListener('dragleave', dragLeaveHandler, true);
    target.addEventListener('drop', dropHandler, true);
    return () => {
      target.removeEventListener('dragenter', stopDefault, true);
      target.removeEventListener('dragover', dragOverHandler, true);
      target.removeEventListener('dragleave', dragLeaveHandler, true);
      target.removeEventListener('drop', dropHandler, true);
    };
  }, [ref, onLoad, uploading, isOver]);
  return [uploading, isOver];
}

export default useDrop;
