import React from 'react';
import { TinaAdmin } from 'tinacms';
import tinaConfig from '../../tina/config';

export default function Admin() {
  return <TinaAdmin config={tinaConfig} />;
}
