<form name="formPayment" method="POST" action="congratulation.php" />
                        
							<label for="firstname">First Name: </label>
							<input type="text" name="firstname" id="firstname" required="Enter Your First Name">
							
							<label for="lastname">Last Name: </label>
							<input type="text" name="lastname" id="lasttname" required="Enter Your Last Name"/>
							
							<label for="email">Email: </label>
							<input type="email" name="email" id="email" required="Enter Your First Name"/>
							
							<label for="address">Address: </label>
							<input type="text" name="address" id="address" required="Enter Your First Name"/>
							
							<label for="address">City: </label>
							<input type="text" name="city" id="city" required="Enter Your First Name"/>
							
							<label for="address">State: </label>
							<select name="state" required="Enter Your First Name">
								<option value="">Select State</option><option value="AK">Alaska</option><option value="AL">Alabama</option><option value="AR">Arkansas</option><option value="AS">American Samoa</option><option value="AZ">Arizona</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DC">D.C.</option><option value="DE">Delaware</option><option value="FL">Florida</option><option value="FM">Micronesia</option><option value="GA">Georgia</option><option value="GU">Guam</option><option value="HI">Hawaii</option><option value="IA">Iowa</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="MA">Massachusetts</option><option value="MD">Maryland</option><option value="ME">Maine</option><option value="MH">Marshall Islands</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MO">Missouri</option><option value="MP">Marianas</option><option value="MS">Mississippi</option><option value="MT">Montana</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="NE">Nebraska</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NV">Nevada</option><option value="NY">New York</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="PR">Puerto Rico</option><option value="PW">Palau</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VA">Virginia</option><option value="VI">Virgin Islands</option><option value="VT">Vermont</option><option value="WA">Washington</option><option value="WI">Wisconsin</option><option value="WV">West Virginia</option><option value="WY">Wyoming</option><option value="AA">Military Americas</option><option value="AE">Military Europe/ME/Canada</option><option value="AP">Military Pacific</option>	
							</select><br/>
							<label for="zipcode">Zipcode: </label>
							<input type="text" name="Zipcode" value="" />
							
							<label for="cardnumber">Card Number: </label>
							<input type="text" name="cardnumber" value="" required="Enter Your First Name"/><br/>
							
							<label for="Expiry">Expiry: </label>
							<select name="expiry" required="Enter Your First Name">
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
							</select> 
							<select name="months" required="Enter Your First Name">
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
							</select> <br/>
							<label for="code">Code: </label>
							<input type="text" name="code" value="" required="Enter Your First Name"/><br/>
							<button type="submit" class="btn btn-primary">Pay Now</button>
							<!-- <input type="submit" name="done" value="paynow"/> -->
                        </form>			