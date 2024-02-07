import axios from "axios";

import {baseURL} from "../constants/urls";

let axiosServices = axios.create(({baseURL}))

export {axiosServices}