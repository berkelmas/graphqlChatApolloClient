import React from 'react';

export const Header = (props) => {
  return(
    <div class="header">
        <div class="logo">
            <h2 class="logo__title">easysnap</h2>
        </div>

        <div class="header_menu">
            <div>
                snaps
            </div>
            <div class="active">
                login
            </div>
            <div>
                join
            </div>
        </div>
    </div>
  )
}
