using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using backend.Services;
using backend.Helpers;
using Microsoft.Extensions.Options;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly backendContext _context;
        private readonly AppSettings _appSettings;

        public AuthenticateController(backendContext context)
        {
            _context = context;

        }

        [HttpGet]
        public IEnumerable<User> GetUsers()
        {
            return _context.Users;
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] User user)
        {
            UserService userService = new UserService(_context);
            var users = userService.Authenticate(user.Username, user.Password);

            if (users == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            var tokenString = "fake token";

            // return basic user info (without password) and token to store client side
            return Ok(new
            {
                id = user.id,
                username = user.Username,
                token = tokenString
            });
        }
    }
}