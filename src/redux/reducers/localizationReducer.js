export const localizationReducer = (state = { title: 'Sign up to your account' }, action) => {
    switch (action.type) {
        case 'CHANGE_LANG':
            return { ...state, title: '注册账号' }
        default:
            return state
    }
}