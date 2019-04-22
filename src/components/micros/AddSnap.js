import React from 'react'

export const AddSnap = (props) => {
  return (
    <div>
      <div class="description">
          <p class="sub_header__desc">simple snap app with <span>react</span>.</p>
      </div>

      <div>
          <form>
              <input class="add-snap__input" type="text" placeholder="add snap" />
          </form>
      </div>
    </div>
  )
}
