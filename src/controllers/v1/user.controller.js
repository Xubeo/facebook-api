import { response } from 'express';
import * as userModel from '../../models/v1/user.model'
import * as postsModel from '../../models/v1/posts.model'
import * as ProfileModel from '../../models/v1/profile.model';


export const getById = async (_request, response) => {

    const {id} = _request.params;
    response.json({
        user : await userModel.getById({
           id : id
        })
    })
}

export const deleteById = async (request,response) => {
    const {id} = request.params;
    await ProfileModel.deleteByUserId(id)
    await postsModel.deleteByAuthorId(id)
    await userModel.deleteById({id: id})
    response.status(200).json({})
}