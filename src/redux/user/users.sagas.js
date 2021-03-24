import { takeLatest, put, all, call } from 'redux-saga/effects'

import UserActionTypes from './user.types'

import { SignInSuccess, SignInFailure } from './users.actions'

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils'


function* getSnapShotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnapshot = yield userRef.get()
        yield put(
            SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch(error) {
        yield put(SignInFailure(error))
    }
}

function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield getSnapShotFromUserAuth(user)
    } catch(error) {
        yield put(SignInFailure(error))
    }
}

function* signInWithEmail({payload: {email, password}}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(SignInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ])
}