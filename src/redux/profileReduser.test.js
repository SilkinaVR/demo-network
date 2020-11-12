import profileReduser, { addPostActionCreator, deletePost } from './profileReduser'
import React from 'react';
    //1. start test data
let state = {
    postData: [
        { id: 1, message: 'Hi, how are you', count: 15 },
        { id: 2, message: 'its my post',
         count: 20 },
        { id: 3, message: 'its you post', count: 20 }
    ]}
test('length of post should be increment', () => {

    
    let action = addPostActionCreator('newPost')    
    //2.action
    let newState = profileReduser( state, action )
    //3.expectation
    expect(newState.postData.length).toBe(4);
});
test('message of new post should be correct', () => {
    //1. start test data

    
    let action = addPostActionCreator('newPost')    
    //2.action
    let newState = profileReduser( state, action )
    //3.expectation
    expect(newState.postData[3].message).toBe('newPost');
});
test('after deleting length of post should be decrement', () => {
    //1. start test data

    
    let action = deletePost(1)    
    //2.action
    let newState = profileReduser( state, action )
    //3.expectation
     expect(newState.postData.length).toBe(2);
});
test('after deleting length shouldnt be decrement if id is incorrect', () => {
    //1. start test data

    
    let action = deletePost(1000)    
    //2.action
    let newState = profileReduser( state, action )
    //3.expectation
     expect(newState.postData.length).toBe(3);
});
