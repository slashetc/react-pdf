/* eslint react/prop-types: 0 */
/* eslint react/jsx-sort-props: 0 */

import React from 'react';
import ReactPDF from '@react-pdf/node';
import { Document, Page, Image } from '@react-pdf/core';

const doc = (
  <Document>
    <Page>
      <Image src="https://img.grouponcdn.com/deal/5EXVDNMDEe1mtyEK6Pgp/ZC-1057x634/v1/c700x420.jpg" />
      <Image src="https://img.grouponcdn.com/deal/5EXVDNMDEe1mtyEK6Pgp/ZC-1057x634/v1/c700x420.jpg" />
    </Page>
  </Document>
);

// Renders document and save it
ReactPDF.render(doc, `${__dirname}/output.pdf`);
