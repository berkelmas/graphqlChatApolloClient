import React from 'react'

export const Snaps = (props) => {
  return (
    <div>
      <div>
          <ul class="snaps">
              <li>
                  <div class="title">Lorem ipsum dolor sit amet</div>
                  <div class="date">
                      <span>now</span>
                  </div>
              </li>
              <li>
                  <div class="title">Curabitur gravida arcu ac tortor dignissim.</div>
                  <div class="date">
                      <span>5 minutes ago</span>
                  </div>
              </li>
              <li>
                  <div class="title">Tristique risus nec feugiat in fermentum.</div>
                  <div class="date">
                      <span>7 minutes ago</span>
                  </div>
              </li>
          </ul>
      </div>
      <div class="counter">3 snap(s)</div>
    </div>
  )
}
