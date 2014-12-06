Template.editProfile.events({'submit form#edit_profile' : function(event, template) {
  event.preventDefault();

  name_input = template.find("input[name=user_name]");
  nickname_input = template.find("input[name=user_nickname]");
  location_input = template.find("input[name=user_location]");
  weight_input = template.find("input[name=user_weight]");
  height_input = template.find("input[name=user_height]");
  reach_input = template.find("input[name=user_reach]");
  age_input = template.find("input[name=user_age]");
  fight_input = template.find("input[name=user_record]");
  designation_input = template.find("input[name=user_designation]");
  gender_input = template.find("input[name=user_gender]");
  weightclass_input = template.find("input[name=user_weightclass]");

  var data = {
    name: name_input.value,
    nickname: nickname_input.value,
    location: location_input.value,
    weight: weight_input.value,
    height: height_input.value,
    reach: reach_input.value,
    age: age_input.value,
    fight: fight_input.value,
    designation: designation_input.value,
    gender: gender_input.value,
    weightclass: weightclass_input.value
  };

  // name_input.value="";
  // nickname_input.value="";
  // location_input.value="";
  // weight_input.value="";
  // height_input.value="";
  // reach_input.value="";
  // age_input.value="";
  // fight_input.value="";
  // designation_input.value="";
  // gender_input.value="";
  // weightclass_input.value="";

  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile":data}});

  Router.go('profile');
}});
