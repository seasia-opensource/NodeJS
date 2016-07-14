app.controller('meetupsController', ['$scope', '$resource',
	function($scope, $resource){
	
		var Meetup = $resource('/api/meetups');
		
		Meetup.query(function(results) {
			$scope.meetups = results;
		})
		
		$scope.updateMeetup = function(meetUpId, self) {
			var meetup_obj = $resource('/api/updatemeetup');
			meetup_obj.save({ meetupid:meetUpId, meetupname:self.$data }, function(elem){});
		}
		
		$scope.createMeetup = function() {
			var meetup = new Meetup();
			meetup.name = $scope.meetupName;
			meetup.$save(function(result){
				$scope.meetups.push(result);
				$scope.meetupName = '';
			});
		}
		
		$scope.deleteMeetup = function(meetUpId, key) {
			var meetup_obj = $resource('/api/meetup/:meetupid', {meetupid:'id'});
			var meetupObj = meetup_obj.delete({meetupid:meetUpId}, function(elem) {
				$scope.meetups.splice(key, 1);
			})
		}
	}
])