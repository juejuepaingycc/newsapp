const news = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_BOOKING':
            return [
                ...state, {
                    url: action.article.url,
                    article: action.article,
                    booked: true
                }
            ]

        case 'UNSAVE_BOOKING':
            return state.map(article =>
                (article.url === action.url)
                    ? { ...article, booked: false } :
                    article)

        // case 'GET_STATUS':
        //     return state.map(article =>
        //         (article.url === action.url && )
        //             ? true : null
        //             )

        default:
            return state
    }
}

export default news
