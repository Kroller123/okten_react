import axios from "axios";

import {baseURL} from "../constants";

let apiService = axios.create({baseURL})

export {apiService}