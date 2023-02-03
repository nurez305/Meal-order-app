import React from 'react'
import classes from './error.module.css'

function Error() {
    return (
        <main className={classes.error_cont}>
          <h1 className={classes.error_text}>
            We're sorry, but the page you are trying to load does not exist or may
            have been removed!
          </h1>
          <a href="/" className={classes.btn}>
            GO BACK TO HOME
          </a>
        </main>
      );
}

export default Error