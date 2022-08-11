
import { SET_TOKEN } from "./mutations";
import { SET_LOADING } from "@/store/mutationsTypes";

export default {
 async signIn(context) {
  return new Promise((resolve, reject) => {
   context.commit(SET_LOADING, true)
   setTimeout(() => {
    context.commit(SET_TOKEN, 'asdsadsad')
    context.commit(SET_LOADING, false)
    resolve()
   }, 5000);
  })
 },
 async signOut(context) {
  return new Promise((resolve, reject) => {
   context.commit(SET_LOADING, true)
   setTimeout(() => {
    context.commit(SET_TOKEN, undefined)
    context.commit(SET_LOADING, false)
    resolve()
   }, 5000);
  })
 }
}