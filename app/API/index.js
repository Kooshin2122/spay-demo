//
import axios from "axios";
//
const BASE_URL = "https://default.hoggaan.app/";
//
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNiIsIm5hbWUiOiJTcG9uZGllcyIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiV1hHVk9DUVZWNk9LRE1GRElQUFpURE9EVkU1VE1FNEEiLCJyb2xlIjpbIlVzZXIiLCJjMDlmZTNiMWZlMDM0NWZmYjM2NDdiNDVkN2JiMDE4NCIsIjJmZjc2Njg5Y2VhNDRiNjE5YTM0YjM4ZWNjNGQ3ZmMxIl0sImh0dHA6Ly93d3cuYXNwbmV0Ym9pbGVycGxhdGUuY29tL2lkZW50aXR5L2NsYWltcy90ZW5hbnRJZCI6IjEzIiwianRpIjoiMDUzMzM0MmQtY2Q2Ny00Yzg1LWFjZTAtMDlkOGEyYmNiNGRlIiwiaWF0IjoxNzA1NDA3NjM3LCJ0b2tlbl92YWxpZGl0eV9rZXkiOiIwMGQzNDVkMC00NTQ0LTRiZGUtOGZlMS05YzlkZTg4ZDkyNDMiLCJ1c2VyX2lkZW50aWZpZXIiOiIzNkAxMyIsInRva2VuX3R5cGUiOiIwIiwibmJmIjoxNzA1NDA3NjM4LCJleHAiOjE3MDU0OTQwMzgsImlzcyI6IkhvZ2dhYW4iLCJhdWQiOiJIb2dnYWFuIn0.75BNXwsAGc3OoT-IIiHgnJ2LiWQzkgDzFnR__d9fOCk";
// >>>>>>>>>>>>>>>>>>>>>>>> GET AUTHORAZATION DATA. >>>>>>>>>>>>>>>>>>>>>>>>
export const GET_AUTH_DATA = async (endPoint) => {
    try {
        // call API
        const res = await axios.get(`${BASE_URL}${endPoint}`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
                'Content-Type': 'application/json'
            }
        })
        //
        return res;
        //
    } catch (error) {
        console.log("GET_AUTH_DATA Error............... API/index.js line 22.....", error.response.data);
        return error.response.data
    }
};
// >>>>>>>>>>>>>>>>>>>>>>>> POST AUTHORAZATION DATA. >>>>>>>>>>>>>>>>>>>>>>>>>
export const POST_AUTH_RAW_DATA = async (endPoint, postData) => {
    try {
        // call API
        const res = await axios.post(`${BASE_URL}${endPoint}`, postData, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
                'Content-Type': 'application/json',
            },
        })
        //
        return res;
        //
    } catch (error) {
        return
        console.log("POST_AUTH_BODY_DATA Error............... API/index.js line 41.....", error.response.data);
    }
};

