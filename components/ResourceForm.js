import { useState } from "react";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "",
  timeToFinish: "",
};

const ResourceForm = ({ onFormSubmit, initialData }) => {
  const [form, setForm] = useState(initialData || DEFAULT_DATA);

  const resetForm = () => setForm(DEFAULT_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const submitForm = () => {
    onFormSubmit(form);
  };

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
                  <input
                    onChange={handleChange}
                    name='title'
                    className='input'
                    type='text'
                    placeholder='Learn Next JS and Sanity IO'
                    value={form.title}
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Message</label>
                <div className='control'>
                  <textarea
                    onChange={handleChange}
                    name='description'
                    className='textarea'
                    placeholder='Learn these technologies'
                    value={form.description}></textarea>
                </div>
              </div>
              <div className='field'>
                <label className='label'>Link</label>
                <div className='control'>
                  <input
                    className='input'
                    onChange={handleChange}
                    name='link'
                    type='text'
                    placeholder='https://udemy.com'
                    value={form.link}
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Priority</label>
                <div className='control'>
                  <div className='select'>
                    <select name='priority' onChange={handleChange} value={form.priority}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='field'>
                <label className='label'>Time To Finish</label>
                <div className='control'>
                  <input
                    onChange={handleChange}
                    name='timeToFinish'
                    className='input'
                    type='number'
                    placeholder='60 '
                    min={0}
                    value={form.timeToFinish}
                  />
                </div>
                <p className='help'>Time is in minutes</p>
              </div>
              <div className='field is-grouped'>
                <div className='control'>
                  <button className='button is-link' onClick={submitForm}>
                    Submit
                  </button>
                </div>
                <div className='control'>
                  <button type='button' className='button is-link is-light' onClick={resetForm}>
                    Reset Form
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceForm;
