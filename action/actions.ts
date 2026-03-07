'use server';

import type { MessageNoti } from "@/types";

const renderError = function (error: unknown): MessageNoti {
  return {
    message: error instanceof Error ? error.message : 'A server error.',
    success: false
  };
};

export const getPlaces = async function () {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/place-data.json`);
    const places = await res.json();
    return places;
  } catch (err) {
    return renderError(err);
  }
};
