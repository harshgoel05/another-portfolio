import { createContext } from 'react';
import { Company, PersonalDetails, Project } from './types';

export const PersonalDetailsContext = createContext<PersonalDetails | undefined>(undefined);
export const ProjectDetailsContext = createContext<Project[] | undefined>(undefined);
export const CompanyDetailsContext = createContext<Company[] | undefined>(undefined);
