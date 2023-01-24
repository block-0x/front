import React from 'react';

function Alert() {
  return (
    <>
      <h5 className="text-center mb-4 textcolor"></h5>
      <p className="lead text-center">アラートmsg(label)</p>
      <p></p>

      <h5 className="text-center mb-4 textcolor">
        以下のフロートが漂着した可能性があります。
      </h5>
      <p className="lead text-center">阿多田島箋A フロート001</p>

      <p className="lead text-center">
        <a href="http://localhost:3000/" className="text-center">
          場所を地図で開く
        </a>
      </p>
    </>
  );
}

export default Alert;
