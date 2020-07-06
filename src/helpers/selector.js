const isLogged = user => {
    return user && user.user && !!user.user.email
} 
export default {
    isLogged
}