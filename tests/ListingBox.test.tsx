import React from "react";
// import { render, fireEvent, waitForElement } from '@testing-library/react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ListingBox  from '../client/components/boxes/ListingBox';
import { BoxState } from '../client/types/types';

function renderListingBox(props: Partial<BoxState> = {}) {
  const defaultProps: BoxState = {
    projectDetails: 'this is a RTL test project',
    projectName: 'RTL test project',
    payRange: 100,
    codeSnippet: 'function testSnippet() {}',
    details: 'test details',
    contact: 'test contacts'
  };
  return render(<ListingBox {...defaultProps } { ...props } />);
}


describe('<ListingBox />',() => {
  let listingBox: HTMLElement;
  beforeAll(async () => {
    const { findByTestId } = renderListingBox();
    listingBox = await findByTestId('listing-box');
  })
  test("should display the ListingBox project name", () => {
    
    expect(listingBox.getElementsByClassName('listing-box-field')[0]).toHaveTextContent('Project Name');
    expect(listingBox.getElementsByClassName('listing-box-field')[0].nextElementSibling).toHaveTextContent('RTL test project');
  });
  test("should display the ListingBox project details", () => {
    
    expect(listingBox.getElementsByClassName('listing-box-field')[1]).toHaveTextContent('Project Details');

    expect(listingBox.getElementsByClassName('listing-box-field')[1].childElementCount).toBe(0);
    
    expect(listingBox.getElementsByClassName('listing-box-field')[1]).
    toHaveTextContent('this is a RTL test project');
  });

  test("should display the ListingBox Pay Range", () => {
    
    expect(listingBox.getElementsByClassName('listing-box-field')[2]).toHaveTextContent('Pay Range');

    expect(listingBox.getElementsByClassName('listing-box-field')[2].childElementCount).toBe(0);
    
    expect(listingBox.getElementsByClassName('listing-box-field')[2]).
    toHaveTextContent('100');
  });
  test("should display the ListingBox code snippet", () => {
    
    expect(listingBox.getElementsByClassName('listing-box-field')[3]).toHaveTextContent('Code Snippet');

    expect(listingBox.getElementsByClassName('listing-box-field')[3].childElementCount).toBe(1);
    
    expect(listingBox.getElementsByClassName('listing-box-field')[3].children[0]).
    toHaveTextContent('function testSnippet() {}');
  });

  test("should display the ListingBox Details", () => {
    
    expect(listingBox.getElementsByClassName('listing-box-field')[4]).toHaveTextContent('Details');

    expect(listingBox.getElementsByClassName('listing-box-field')[4].childElementCount).toBe(0);
    
    expect(listingBox.getElementsByClassName('listing-box-field')[4]).
    toHaveTextContent('test details');
  });

  test("should display the ListingBox Details", () => {
    
    expect(listingBox.getElementsByClassName('listing-box-field')[5]).toHaveTextContent('Contacts');

    expect(listingBox.getElementsByClassName('listing-box-field')[5].childElementCount).toBe(0);
    
    expect(listingBox.getElementsByClassName('listing-box-field')[5]).
    toHaveTextContent('test contacts');
  });
});