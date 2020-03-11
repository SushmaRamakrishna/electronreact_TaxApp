import React from 'react'
import useFileHandlers from './useFileHandlers'


const Input = (props) => (
  <input
    type="file"
    accept="image/*"
    name="img-loader-input"
    multiple
    {...props}
  />
)

const UploadW2Form =({ userInfo })  => {
  const {
    files,
    pending,
    next,
    uploading,
    uploaded,
    status,
    onSubmit,
    onChange,
  } = useFileHandlers()

  return (
    <div className="container">
      <p>Next, Please upload your W2 Form, {userInfo.firstname} {userInfo.lastname} </p>
      <form className="form" onSubmit={onSubmit}>
        {status === 'FILES_UPLOADED' && (
          <div className="success-container">
            <div>
              <h2>Congratulations!</h2>
              <small>You uploaded your file.</small>
            </div>
          </div>
        )}
        <div>
          <Input onChange={onChange} />
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
        <div>
          {files.map(({ file, src, id }, index) => (
            <div
              style={{
                opacity: uploaded[id] ? 0.2 : 1,
              }}
              key={`thumb${index}`}
              className="thumbnail-wrapper"
            >
              <img className="thumbnail" src={src} alt="" />
              <div className="thumbnail-caption">{file.name}</div>
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}

export default UploadW2Form