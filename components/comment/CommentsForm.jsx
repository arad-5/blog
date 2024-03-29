import { useState, useRef, useEffect } from 'react'
import { submitComment } from '../../services/submitComment'

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const commentEl = useRef()
    const nameEl = useRef()
    const emailEl = useRef()
    const storeDataEl = useRef()

    const handleCommentSubmit = (e) => {
        setError(false)
        const { value: comment } = commentEl.current
        const { value: name } = nameEl.current
        const { value: email } = emailEl.current
        const { checked: storeData } = storeDataEl.current

        if (!comment || !nameEl || !emailEl) {
            setError(true)
            return
        }

        const commentObj = {
            name,
            email,
            comment,
            slug,
        }
        if (storeData) {
            window.localStorage.setItem('name', name)
            window.localStorage.setItem('email', email)
        } else {
            window.localStorage.removeItem('name', name)
            window.localStorage.removeItem('email', email)
        }
        submitComment(commentObj).then((res) => {
            setShowSuccessMessage(true)

            setTimeout(() => {
                setShowSuccessMessage(false)
            }, 3000)
        })
    }

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem('name')
        emailEl.current.value = window.localStorage.getItem('email')
    }, [])

    return (
        <div className="glassmorphism my-8 rounded-lg p-8 pb-12 shadow-lg">
            <h3 className="mb-8 border-b pb-4 text-xl font-semibold dark:text-slate-300">
                Leave your comment
            </h3>
            <div className="mb-4 grid grid-cols-1 gap-4">
                <textarea
                    ref={commentEl}
                    rows="5"
                    className="w-full rounded-lg bg-gray-100 p-4 text-gray-800 outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Comment"
                    name="comment"
                />
            </div>
            <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                <input
                    type="text"
                    ref={nameEl}
                    placeholder="Name:"
                    name="name"
                    className="rounded-md bg-gray-100 p-4 text-gray-800 outline-none focus:ring-2 focus:ring-gray-200 dark:text-slate-300 py-2"
                />
                <input
                    type="text"
                    ref={emailEl}
                    placeholder="Email:"
                    name="email"
                    className="rounded-md bg-gray-100 p-4 text-gray-800 outline-none focus:ring-2 focus:ring-gray-200 py-2"
                />
            </div>

            {error && (
                <p className="text-xs text-red-500">All field are required.</p>
            )}
            <div className="mt-8 flex items-center">
                <button
                    type="button"
                    onClick={(e) => handleCommentSubmit()}
                    className="ease text-md inline-block cursor-pointer rounded-md bg-pink-600 px-6 py-3 font-normal text-white transition duration-200 hover:bg-indigo-900"
                >
                    Submit comment
                </button>
                <input
                    ref={storeDataEl}
                    type="checkbox"
                    id="storeData"
                    name="storeData"
                    value="true"
                    className="ml-10 mr-2"
                />
                <label
                    htmlFor="storeData"
                    className="cursor-pointer text-gray-500"
                >
                    Save my email and name
                </label>
            </div>
            {showSuccessMessage && (
                <span className="float-right mt-3 text-xl font-semibold text-green-300">
                    asdf
                </span>
            )}
        </div>
    )
}

export default CommentsForm
