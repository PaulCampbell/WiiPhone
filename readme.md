# WiiPhone
This is all about using your fancy phone as a Wii controller for controlling websites.

It's a sample and it uses the pollon project as a starting point for things like user account / general website infrastructure.

## Todo

 * Add new phone connection
   * generate url - hit url on phone
   * when phone connects, check for ondeviceorientation support
   * error message if no support... send them away.
   * Add persistent cookie to phone containing token (phone_connection):
     - username:connection_date:token_id
     - expires - two years down the line...
   * Add phone_connection token_id to user account

 * When non phone connects (logs in)
   * start websocket connection - await instructions
   * on phonecommand received, show on screen

 * When connection received containing phone_connection cookie:
   * start websocket connection on screen
   * ondeviceorientation: sendPhoneCommand(args) - with phone_connection token.