import React from 'react';
import { Document, Example } from '@component-controls/core';
import { TSButton } from './TSButton';

export default {
  title: 'Typescript Button',
  component: TSButton,
} as Document;

export const main: Example = () => <TSButton>some text</TSButton>;
