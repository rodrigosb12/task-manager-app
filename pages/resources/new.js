const ResourceCreate = () => {
  return (
    <div className='container'>
      <div className='columns'>
        <div className='column is-8 is-offset-2 '>
          <div className='resource-form'>
            <h1 className='title'>Add New Resource</h1>
            <form>
              <div className='field'>
                <label className='label'>Title</label>
                <div className='control'>
                  <input className='input' type='text' placeholder='Title' />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Description</label>
                <div className='control'>
                  <input className='input' type='text' placeholder='Description' />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Link</label>
                <div className='control'>
                  <input className='input' type='text' placeholder='Link' />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Priority</label>
                <div className='control'>
                  <input className='input' type='text' placeholder='Priority' />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Time To Finish</label>
                <div className='control'>
                  <input className='input' type='number' placeholder='Time To Finish' min={0} />
                </div>
              </div>
              <div className='field is-grouped'>
                <div className='control'>
                  <button className='button is-link'>Submit</button>
                </div>
                <div className='control'>
                  <button className='button is-link is-light'>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCreate;
