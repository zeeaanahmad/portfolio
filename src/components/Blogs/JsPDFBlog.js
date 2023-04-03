import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import "../../pages/style.css";
export const JsPDFBlog = () => {
  return (
    <>
      <h1>How to Use jsPDF in React</h1>
      <p>
        As a full-stack developer, you may find yourself working with a lot of
        data that needs to be converted into printable PDF documents. This is
        where the jsPDF library comes in handy. With jsPDF, you can easily
        generate PDF documents directly from your React application.
      </p>
      <p>
        In this tutorial, we'll learn how to use jsPDF, a JavaScript library, to
        generate PDF documents in React. We'll create a simple React application
        and use jsPDF to generate a PDF document with a header, footer, and some
        content.
      </p>
      <h3>Prerequisites</h3>
      <p>
        Before we begin, make sure you have the following tools installed on
        your machine:
      </p>
      <li>Node.js (version 14 or later)</li>
      <li>npm (version 6 or later)</li>
      <li>React (version 17 or later)</li>
      <h3>Creating a New React App</h3>
      <p>
        To create a new React app, open your terminal and run the following
        command:
      </p>
      <code>npx create-react-app my-app</code>
      <br></br>
      <code>cd my-app</code>
      <h3>Installing jsPDF</h3>
      <code> npm install jspdf</code>
      <p>This will install jsPDF and its dependencies in your project.</p>
      <h2>Creating a Component for Generating PDF</h2>
      <p>
        Next, let's create a new component called JsPDFBlog that will generate a
        PDF document. Create a new file called JsPDFBlog.js in your
        src/components directory and add the following code:
      </p>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {`
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import jsPDF from 'jspdf';

const JsPDFBlog = () => {
  const generatePdf = () => {
    // Create a new instance of jsPDF
    const doc = new jsPDF();

    // Add header to the PDF
    doc.text('Header', 20, 20);

    // Add footer to the PDF
    doc.text('Footer', 20, doc.internal.pageSize.height - 20);

    // Add content to the PDF
    doc.text('Hello World!', 20, 50);

    // Save the PDF
    doc.save('example.pdf');
  };

  return (
    <Container>
      <Row>
        <Col>
          <p>
            By default, the axis of the PDF document is positioned at the top-left corner of the page. However, you may need to customize the axis of the document, as well show in the new tab. To customize the axis of the document, you can use the 'setX()' and setY() methods provided by the 'jsPDF' object.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={generatePdf}>
            Generate PDF
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default JsPDFBlog;`}
      </SyntaxHighlighter>
      <p>
        In this code, we're importing the necessary components and libraries
        (Container, Row, Col, Button, and jsPDF) and creating a new component
        called JsPDFBlog. The generatePdf function is used to create a new
        instance of the jsPDF object and use it to generate a simple PDF
        document with the text "Hello World!". We've also added a header and
        footer to the PDF.
      </p>
      <p>
        The setX() and setY() methods can be used to customize the axis of the
        document. These methods allow you to set the current position of the
        document cursor (i.e., the position where the next text or graphic will
        be added). For example, you can use the setX() method to set the
        horizontal position of the cursor, and the setY() method to set the
        vertical position of the cursor.
      </p>
      <div className="footer">
        <hr className="line" />
        <p className="copyright">
          © Copyright 2023.
          <br />
          Designed & Built by <span>Zeeaan Ahmad</span>
        </p>
      </div>
    </>
  );
};
