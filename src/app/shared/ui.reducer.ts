import { OpeningHours } from './../shared/opening-hours.model';
import {
  UIActions,
  OPEN_SIDENAV,
  CLOSE_SIDENAV,
  START_LOADING,
  STOP_LOADING,
  SELECTED_LANGUAGE,
  SET_OPENING_HOURS,
  SHOWCASE_ACTIVE
} from './ui.actions'

export interface UIState {
  isSidenavOpen: boolean,
  isLoading: boolean,
  selectedLanguage: string
  openingHours: OpeningHours,
  isShowcaseActive: boolean
}

const initialState: UIState = {
  isSidenavOpen: false,
  isLoading: false,
  selectedLanguage: 'dutch',
  openingHours: {    
    openingHours: '12:00 - 20:00',
    snacks: '12:00 - 19:30',
    lunch: '12:00 - 17:00',
    dinner: '17:00 - 19:30'
  },
  isShowcaseActive: false
}

export function uiReducer(state = initialState, action: UIActions) {
  switch(action.type) {
    case OPEN_SIDENAV:
      return {
        ...state,
        isSidenavOpen: true
      };
    case CLOSE_SIDENAV:
      return {
        ...state,
        isSidenavOpen: false
      }
    case START_LOADING: 
      return {
        ...state,
        isLoading: true
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false
      }
    case SELECTED_LANGUAGE: 
      return {
        ...state,
        selectedLanguage: action.payload
      };
    case SET_OPENING_HOURS:
      return {
        ...state,
        openingHours: this.openingHours.openingHours
      }
    case SHOWCASE_ACTIVE:
      console.log(action.payload);
      return {
        ...state,
        isShowcaseActive: action.payload
      }
    default: {
      return {
        ...state
      }
    }
  }
} 

export const getIsSidenavOpen = (state: UIState) => state.isSidenavOpen;
export const getIsLoading = (state: UIState) => state.isLoading;
export const getSelectedLanguage = (state: UIState) => state.selectedLanguage;
export const getOpeningHours = (state: UIState) => state.openingHours;
export const getIsShowcaseActive = (state: UIState) => state.isShowcaseActive;