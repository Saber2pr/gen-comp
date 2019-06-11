/*
 * @Author: saber2pr
 * @Date: 2019-06-11 19:20:18
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-11 20:46:18
 */
export const TSX = (name: string) =>
  `import React from 'react';
import './style.less';

export interface ${name} {  };

export const ${name} = ({  }: ${name}) => {
  return <div className="${name}">${name}</div>;
}`

export const Style = (name: string) =>
  `.${name} {
  
}`
