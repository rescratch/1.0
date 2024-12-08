import {
  fileOpen,
  directoryOpen,
  fileSave,
  supported,
} from "https://googlechromelabs.github.io/browser-fs-access/src/index.js";
const openButton = document.getElementById("open");

if (supported) {
  console.log('Using the File System Access API.');
} else {
  console.log('Using the fallback implementation.');
}

async function openFile() {
  try {
    const blobs = await fileOpen([
      {
        description: 'ReScratch Project',
        mimeTypes: ['application/zip'],
        extensions: ['.rsb'],
        multiple: false,
      },
      {
        description: 'Scratch Project',
        mimeTypes: ['application/zip'],
        extensions: ['.sb', '.sb2', '.sb3'],
        multiple: false,
      },
    ]);

      console.log(`Selected file: ${blobs.name}`);

  } catch (error) {
    console.error('Error opening file(s):', error);
    // Display an error message to the user
  }
}

openButton.addEventListener('click', openFile);
