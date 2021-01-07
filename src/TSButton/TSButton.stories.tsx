import React from 'react';
import { Document, Example } from '@component-controls/core';
import { TSButton } from './TSButton';
import design_notes from '../media/design-notes.md';
import image_screenshot from '../media/image-screenshot.jpg';

export default {
  title: 'Typescript Button',
  component: TSButton,
  plugins: {
    figma: [
      'https://www.figma.com/file/vgf0guEmC5IKtjHJKkRVSr/Button?node-id=0%3A1',
    ],
    notes: {
      title: 'Design brief',
      items: [design_notes],
    },
    images: {
      title: 'Screenshots',
      items: [image_screenshot],
    },
  },
} as Document;

export const main: Example = () => <TSButton>some text</TSButton>;

export const color = () => (
  <TSButton color="darkgrey" backgroundColor="grey">
    contrast issue
  </TSButton>
);
