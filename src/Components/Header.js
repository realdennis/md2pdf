import React from 'react';
import styled from 'styled-components';
import GitHubButton from 'react-github-btn';
import UploadButton from './Upload.js';
const Header = ({ className }) => {
  return (
    <header className={className + ' no-print'}>
      <p className="project"> md2pdf </p>
      <GitHubButton
        href="https://github.com/realdennis/md2pdf"
        aria-label="Star realdennis/md2pdf on GitHub"
      >
        Star
      </GitHubButton>

      <div className="menu">
        <UploadButton className="button upload" />
        <p className="button download" onClick={() => window.print()}>
          <span role="img" aria-label="download">
            🎉
          </span>
          <span>Transform</span>
        </p>
      </div>
      <span className="author">Powered by @realdennis</span>
    </header>
  );
};

export default styled(Header)`
  * {
    box-sizing: border-box;
  }
  flex-shrink:0;
  overflow:auto;
  -webkit-overflow-scrolling:touch;
  user-select: none;
  padding-left: 5px;
  padding-right: 5px;
  color: black;
  background-color: rgb(233, 233, 233);
  display: flex;
  align-items: center;
  height: 40px;
  p.project {
    font-weight: bold;
    margin:5px;
    flex-shrink:0;
  }
  div.menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .button {
      height: 80%;
      margin: 0;
      display: flex;
      align-items: center;
      margin-left: 3px;
      border-radius: 3px;
      border: 1px solid black;
      padding: 10px;
      cursor: pointer;
    }
  }

  span.author {
    position: fixed;
    bottom: 2px;
    left: 2px;
    opacity: 0.5;
    color: white;
    height: 20px;
  }
  @keyframes dance {
    0% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-2deg);
    }
  }
`;
