import React from 'react'

export const AddSnap = (props) => {
  return (
    <div>
      <div className="description">
          <p className="sub_header__desc">simple snap app with <span>react</span>.</p>
      </div>

      <div>
          <form>
              <input className="add-snap__input" type="text" placeholder="add snap" />
          </form>
      </div>
    </div>
  )
}
