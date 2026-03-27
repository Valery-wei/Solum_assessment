import { apiGet } from "./client";
import type { Filters } from "../types";

export const getSummary = (filters: Filters) => apiGet("/mortality/summary", filters);
export const getTable = (filters: Filters) => apiGet("/mortality/table", filters);
export const getAnalysis = (filters: Filters) => apiGet("/mortality/analysis", filters);