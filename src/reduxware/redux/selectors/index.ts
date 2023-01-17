import { createSelector } from "@reduxjs/toolkit";
import { getOptions } from "js/functions";

import {isNoHintsFoundVisible, getAllHints} from '../hintsReducer';

const sortHints =(ary: string[])=>{
const localeSort = Array.from(ary).sort((a, b) => {
  return a.localeCompare(b, 'en', { sensitivity: 'base' });
});
 return localeSort;
}

const getSortedHints = createSelector(getAllHints, sortHints);

const getSortedPairs = createSelector(getSortedHints, getOptions);


export {getSortedPairs, getSortedHints, isNoHintsFoundVisible}