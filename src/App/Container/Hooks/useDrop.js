import { useEffect, useState } from 'react';

function preventDefault(e) {
  e.preventDefault();
}

function useDrop(ref, onLoad = () => {}) {
  const [uploading, setUploading] = useState(false);
  const [isOver, setOver] = useState(false);
  function onDragLeave() {
    setOver(false);
  }
  function onDragOver() {
    setOver(true);
  }
  function onDrop(e) {
    setOver(false);
    handleUpload(e.dataTransfer.files);
  }
  function handleUpload(files) {
    if (files && files[0] && !uploading) {
      const reader = new FileReader();
      reader.onload = e => {
        setUploading(false);
        onLoad(e.target.result);
      };
      reader.readAsText(files[0]);
      setUploading(true);
    }
  }
  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    target.addEventListener('dragover', onDragOver);
    target.addEventListener('dragleave', onDragLeave);
    target.addEventListener('drop', onDrop);
    window.addEventListener('dragover', preventDefault);
    window.addEventListener('drop', preventDefault);
    return () => {
      target.removeEventListener('dragover', onDragOver);
      target.removeEventListener('dragleave', onDragLeave);
      target.removeEventListener('drop', onDrop);
      window.removeEventListener('dragover', preventDefault);
      window.removeEventListener('drop', preventDefault);
    };
  }, []);
  return [uploading, isOver];
}

export default useDrop;
