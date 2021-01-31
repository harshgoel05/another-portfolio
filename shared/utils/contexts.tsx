import { createContext } from 'react';
import { PersonalDetails, Project } from './types';

export const PersonalDetailsContext = createContext<PersonalDetails | undefined>(undefined);
export const ProjectDetailsContext = createContext<Project[] | undefined>(undefined);
