import React from 'react';
import { Follow } from 'react-twitter-widgets';

export default function UserInfo({ config, expanded }) {
  const { userTwitter } = config;
  if (!userTwitter) return null;
  return (
    <Follow
      username={userTwitter}
      options={{ count: expanded ? true : 'none' }}
    />
  );
}
