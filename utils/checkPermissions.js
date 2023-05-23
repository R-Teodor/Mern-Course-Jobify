import { UnAuthenticatedError } from '../errors/index.js'

const checkPermissions = (requestUser, resourceUserId) => {
  // if (requestUser.role === 'admin') return
  // console.log(requestUser)
  if (requestUser.userID === resourceUserId.toString()) return
  throw new UnAuthenticatedError('Not Authorized to access this route')
}

export default checkPermissions
