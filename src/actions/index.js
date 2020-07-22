import { SAVE_BOOKING, UNSAVE_BOOKING } from './actionTypes'

export const saveBooking = (article) => ({
    type: SAVE_BOOKING,
    url: article.url,
    article
})

export const unsaveBooking = (url) => ({
    type: UNSAVE_BOOKING,
    url
})