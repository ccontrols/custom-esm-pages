import React, { FC, ButtonHTMLAttributes } from 'react';

interface TSButtonProps {
  /**
   *  Boolean indicating whether the button should render as disabled
   */
  disabled?: boolean;

  /**
   * button label
   */
  children?: string;

  /**
   * onClick handler
   */
  onClick?: () => void;

  /**
   * Custom styles
   */
  style?: React.CSSProperties;

  /**
   * Background color
   */
  backgroundColor?: string;

  /**
   * Text color, default black
   */
  color?: string;

  /**
   * Button type
   */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];

  /**
   * Numeric  field type
   */
  padding?: number;
}

/**
 * Button with react Typescript properties
 */
export const TSButton: FC<TSButtonProps> = ({
  disabled = false,
  children = 'default',
  onClick,
  style = {},
  backgroundColor = '#fefefe',
  color = 'black',
  type = 'button',
  padding = 5,
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    style={{
      ...style,
      backgroundColor,
      color,
      padding,
    }}
  >
    {children}
  </button>
);
